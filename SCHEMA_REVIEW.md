# Database Schema Review

## Issues Found

### 1. **Inconsistent ID Generation**

- **User table** uses: `integer().primaryKey().generatedAlwaysAsIdentity()`
- **Other tables** use: `serial("id").primaryKey()`
- **Recommendation**: Use consistent approach across all tables

### 2. **Allocation Schema is Too Minimal**

The allocation table only has:

- id, userId, amount, createdAt, updatedAt

**Missing fields:**

- What is being allocated? (name, description)
- Category relationship (which category is this allocation for?)
- Budget period (monthly, yearly, etc.)
- Start/end dates for the allocation period

### 3. **Inconsistent Goal Relations**

- **Goal** has relation to `many(income)` and `many(expenses)`
- **Expense** has `goalId` field (can link to goal)
- **Income** does NOT have `goalId` field but goal expects to relate to incomes
- **Issue**: Income cannot be linked to goals, but the relation suggests it should

### 4. **Missing Foreign Key Constraints**

Foreign keys are defined in relations but not enforced at the database level.
Consider adding explicit `.references()` in field definitions for data integrity.

### 5. **Missing Indexes**

For performance, consider adding indexes on:

- `userId` (in all tables - frequently queried)
- `categoryId` (in expenses and income)
- `goalId` (in expenses)
- `email` (in user - already has unique constraint)

### 6. **Missing Useful Fields**

**Expenses/Income:**

- Transaction date (separate from createdAt - when the transaction actually occurred)
- Recurring flag (is this a recurring transaction?)
- Recurring frequency (daily, weekly, monthly, yearly)

**Goals:**

- Start date (when did the goal start?)
- Priority level (optional)

**User:**

- Password hash field (if using local auth)
- Role field (if you have admin users)

**Category:**

- Icon/color field (for UI customization)
- Is default category flag

### 7. **Data Type Considerations**

**Amount fields:**

- Currently using `integer()` - consider if you need decimal precision
- If dealing with cents/pence, integer is fine
- If dealing with decimal currencies, consider `numeric` or `decimal`

**Timestamp fields:**

- Some use `.notNull().defaultNow()`, others just `.defaultNow()`
- Consider consistency

### 8. **Nullable vs Not Null**

**Expenses:**

- `categoryId` is nullable - OK if expenses can exist without category
- `goalId` is nullable - OK if expenses can exist without goal
- `title` has default "" - consider making nullable instead

**Income:**

- `categoryId` is nullable - OK if income can exist without category
- Missing `goalId` - but goal relation suggests it should exist

### 9. **User Schema Missing Fields**

Based on the User type in `src/modules/user/types/index.ts`, the schema might be missing:

- `password` field (if using local authentication)
- `role` field (if you have admin users)
- `image` field (for profile pictures)
- `provider` field (for OAuth providers)

## Recommendations

### High Priority

1. ✅ Add `goalId` to income table OR remove income relation from goal
2. ✅ Expand allocation schema with necessary fields
3. ✅ Add transaction date field to expenses and income
4. ✅ Make ID generation consistent across all tables

### Medium Priority

5. ✅ Add indexes for frequently queried fields
6. ✅ Consider adding recurring transaction support
7. ✅ Add foreign key constraints explicitly

### Low Priority

8. ✅ Add soft delete support (deletedAt field)
9. ✅ Add priority/importance fields where useful
10. ✅ Consider adding audit fields (createdBy, updatedBy)

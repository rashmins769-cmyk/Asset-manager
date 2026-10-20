Role: IT Administrator (Full access to manage inventory, categories, departments, and users)

Page: /dashboard (The main landing page after login)
Component: <Sidebar /> - Navigation links (Dashboard, Inventory, Employees, Assignments).
Component: <TopNavbar /> - Shows logged-in user profile, current time, and logout button.
Component: <StatOverview /> - 4 status blocks showing Total Assets, Active Assignments, Available Stock, and Total Employees.
Component: <RecentActivityFeed /> - A chronological list showing recent check-ins and check-outs.

Page: /inventory (The page to manage physical assets and categories)
Component: <Sidebar /> - (Reused from dashboard).
Component: <PageHeader /> - Dynamic title and generic action buttons (Add, Export).
Component: <InventoryDataTable /> - A large table listing all assets (name, serial, status, category) with search, filter, and pagination.
Component: <AddAssetModal /> - A popup form to POST a new asset.
Component: <UpdateStatusModal /> - A popup to PATCH a physical condition ('Retired', 'Available').

Page: /employees (The page to manage personnel and departments)
Component: <Sidebar /> - (Reused from dashboard).
Component: <EmployeeTable /> - Table displaying employees mapped to their respective departments.
Component: <AddEmployeeModal /> - Popup capturing name, email, department, and role id.
Component: <EmployeeProfileCard /> - Quick-view sidebar of an employee's details and active equipment.

Page: /assignments (The page to execute Check-outs and Returns)
Component: <Sidebar /> - (Reused from dashboard).
Component: <AssignmentActionPanel /> - Form block with Asset Dropdown & Employee Dropdown to POST a new assignment.
Component: <AssignmentHistoryTable /> - Comprehensive table linking checked-out and checked-in items.
Component: <ReturnAssetButton /> - Component nested inside rows to flag an item as returned.

Role: Standard Employee (Can only view what is assigned to them and basic directory)

Page: /my-portal (Their personal landing page)
Component: <TopNavbar /> - (Reused from dashboard).
Component: <WelcomeBanner /> - Personalized greeting and general announcements.
Component: <MyAssetGrid /> - Grid of cards showing the specific laptops/monitors currently checked out to them.
Component: <AcknowledgeReceiptModal /> - A popup for the employee to digitally sign off that they received the item.
Component: <ReportIssueButton /> - A button nested in the asset grid to flag their assigned asset as broken/needs maintenance.

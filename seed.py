from database import SessionLocal, engine, Base
import models
from datetime import datetime

def seed_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        if db.query(models.Department).count() == 0:
            departments = [
                models.Department(id=1, name="Human Resources"),
                models.Department(id=2, name="Engineering"),
                models.Department(id=3, name="Design"),
                models.Department(id=4, name="Sales"),
                models.Department(id=5, name="IT/System Administration"),
            ]
            db.add_all(departments)
            db.commit()

        if db.query(models.Role).count() == 0:
            roles = [
                models.Role(id=1, name="System Admin", permissions_level=10, permissions="manage:inventory,manage:users,view:asset"),
                models.Role(id=2, name="HR Manager", permissions_level=8, permissions="manage:inventory,manage:users,view:asset"),
                models.Role(id=3, name="Standard Employee", permissions_level=1, permissions="view:asset"),
            ]
            db.add_all(roles)
            db.commit()

        if db.query(models.Employee).count() == 0:
            employees = [
                models.Employee(id=1, first_name="Alice", last_name="Smith", email="alice.smith@assetlink.com", department_id=1, role_id=2, is_active=True),
                models.Employee(id=2, first_name="Bob", last_name="Johnson", email="bob.j@assetlink.com", department_id=2, role_id=3, is_active=True),
                models.Employee(id=3, first_name="Charlie", last_name="Davis", email="charlie.d@assetlink.com", department_id=3, role_id=3, is_active=True),
                models.Employee(id=4, first_name="Diana", last_name="Prince", email="diana.p@assetlink.com", department_id=4, role_id=3, is_active=True),
                models.Employee(id=5, first_name="Evan", last_name="Wright", email="evan.w@assetlink.com", department_id=5, role_id=1, is_active=True),
            ]
            db.add_all(employees)
            db.commit()

        if db.query(models.AssetCategory).count() == 0:
            categories = [
                models.AssetCategory(id=1, name="Laptops", description="Company assigned laptops and computers"),
                models.AssetCategory(id=2, name="Mobile Devices", description="Company phones and tablets"),
                models.AssetCategory(id=3, name="Software Licenses", description="Purchased software subscriptions"),
                models.AssetCategory(id=4, name="Office Furniture", description="Desks, chairs, and ergonomic equipment"),
            ]
            db.add_all(categories)
            db.commit()

        if db.query(models.Asset).count() == 0:
            assets = [
                models.Asset(id=1, name="MacBook Pro 16\"", serial_number="MBP16-2023-001", category_id=1, status="Assigned"),
                models.Asset(id=2, name="Dell XPS 15", serial_number="DXPS-2023-042", category_id=1, status="Assigned"),
                models.Asset(id=3, name="iPhone 14 Pro", serial_number="IP14P-4910", category_id=2, status="Available"),
                models.Asset(id=4, name="Adobe Creative Cloud", serial_number="ACC-LIC-991", category_id=3, status="Assigned"),
                models.Asset(id=5, name="Ergonomic Office Chair", serial_number="EOC-1002", category_id=4, status="Assigned"),
            ]
            db.add_all(assets)
            db.commit()

        if db.query(models.AssetAssignment).count() == 0:
            assignments = [
                models.AssetAssignment(id=1, asset_id=1, employee_id=2, assigned_by_id=5, assignment_status="Active", notes="MacBook assigned to Bob for engineering work."),
                models.AssetAssignment(id=2, asset_id=2, employee_id=1, assigned_by_id=5, assignment_status="Active", notes="Dell XPS assigned to Alice in HR."),
                models.AssetAssignment(id=3, asset_id=4, employee_id=3, assigned_by_id=1, assignment_status="Active", notes="Design software assigned to Charlie by HR."),
                models.AssetAssignment(id=4, asset_id=5, employee_id=2, assigned_by_id=1, assignment_status="Active", notes="Office chair provided for Bob."),
            ]
            db.add_all(assignments)
            db.commit()
    finally:
        db.close()

if __name__ == "__main__":
    seed_db()
    print("Database seeded successfully!")

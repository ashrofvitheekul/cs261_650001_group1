# Test data (ไม่รันอัตโนมัติ)

สคริปต์ปรับข้อมูลให้ตรงกับ test case ใน User Story Detail
รันทีละไฟล์ตอนทดสอบ แล้วรัน `reset-seed.sql` คืนค่าเดิม

### Git Bash

ต้องมี `MSYS_NO_PATHCONV=1` ไม่งั้น Git Bash จะแปลง `/opt/...` เป็น `C:/Program Files/Git/opt/...` แล้ว error

```bash
MSYS_NO_PATHCONV=1 docker exec -i sp-db /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "SmartParking@2026" -C -d SmartParking < database/test-data/tc05-p2-full.sql
```

### PowerShell

```powershell
Get-Content database/test-data/tc05-p2-full.sql -Encoding UTF8 | docker exec -i sp-db /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "SmartParking@2026" -C -d SmartParking
```
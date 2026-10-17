-- คืนค่าทุกลานเป็นค่าเริ่มต้นใน 03-seed.sql (รันหลังทดสอบทุกครั้ง)
UPDATE dbo.parking_lot SET total_spots = 180, available_spots = 42,  updated_at = SYSDATETIME() WHERE code = N'P1';
UPDATE dbo.parking_lot SET total_spots = 240, available_spots = 15,  updated_at = SYSDATETIME() WHERE code = N'P2';
UPDATE dbo.parking_lot SET total_spots = 320, available_spots = 118, updated_at = SYSDATETIME() WHERE code = N'P3';
UPDATE dbo.parking_lot SET total_spots = 200, available_spots = 0,   updated_at = SYSDATETIME() WHERE code = N'P4';
UPDATE dbo.parking_lot SET total_spots = 400, available_spots = 63,  updated_at = SYSDATETIME() WHERE code = N'P5';
UPDATE dbo.parking_lot SET total_spots = 150, available_spots = 96,  updated_at = SYSDATETIME() WHERE code = N'P6';
UPDATE dbo.parking_lot SET total_spots = 260, available_spots = 74,  updated_at = SYSDATETIME() WHERE code = N'M1';
UPDATE dbo.parking_lot SET total_spots = 300, available_spots = 25,  updated_at = SYSDATETIME() WHERE code = N'M2';
GO

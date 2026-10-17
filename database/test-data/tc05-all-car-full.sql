-- US05: ลานรถยนต์เต็มทุกลาน -> "ขณะนี้ลานจอดรถยนต์เต็มทุกลาน"
UPDATE dbo.parking_lot SET available_spots = 0, updated_at = SYSDATETIME() WHERE vehicle_type = N'CAR';
GO

-- US05: P2 เต็มด้วย -> ระบบต้องแนะนำ P3
UPDATE dbo.parking_lot SET available_spots = 0, updated_at = SYSDATETIME() WHERE code = N'P2';
GO

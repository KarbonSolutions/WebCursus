namespace Hotel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Rooms : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Rooms", "CheckInDate");
            DropColumn("dbo.Rooms", "CheckOutDate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Rooms", "CheckOutDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Rooms", "CheckInDate", c => c.DateTime(nullable: false));
        }
    }
}

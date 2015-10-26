namespace Hotel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Nights2CheckOut : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Reservations", "CheckOutDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.Reservations", "Nights");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Reservations", "Nights", c => c.Int(nullable: false));
            DropColumn("dbo.Reservations", "CheckOutDate");
        }
    }
}

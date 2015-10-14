namespace Store.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class change : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Albums", "Temp");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Albums", "Temp", c => c.String());
        }
    }
}

namespace Store.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class KolommenToegevoegd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Albums", "Title", c => c.String(maxLength: 50));
            AddColumn("dbo.Albums", "Artist", c => c.String(maxLength: 50));
            AddColumn("dbo.Albums", "Price", c => c.Double(nullable: false));
            AddColumn("dbo.Albums", "releasedate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Albums", "releasedate");
            DropColumn("dbo.Albums", "Price");
            DropColumn("dbo.Albums", "Artist");
            DropColumn("dbo.Albums", "Title");
        }
    }
}

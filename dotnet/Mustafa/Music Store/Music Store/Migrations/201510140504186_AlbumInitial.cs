namespace Music_Store.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlbumInitial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Albums",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Albums");
        }
    }
}

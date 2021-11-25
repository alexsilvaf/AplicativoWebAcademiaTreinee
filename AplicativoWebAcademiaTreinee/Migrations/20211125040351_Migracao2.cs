using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AplicativoWebAcademiaTreinee.Migrations
{
    public partial class Migracao2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Alterar",
                table: "PessoaModel",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Alterar",
                table: "PessoaModel");
        }
    }
}

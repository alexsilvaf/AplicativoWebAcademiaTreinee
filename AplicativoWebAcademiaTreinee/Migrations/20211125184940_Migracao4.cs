using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AplicativoWebAcademiaTreinee.Migrations
{
    public partial class Migracao4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Alterar",
                table: "PessoaModel",
                newName: "Situacao");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Situacao",
                table: "PessoaModel",
                newName: "Alterar");
        }
    }
}

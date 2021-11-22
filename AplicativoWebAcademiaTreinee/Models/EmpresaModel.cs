namespace AplicativoWebAcademiaTreinee.Models
{
    public class EmpresaModel
    {
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string NomeFantasia { get; set; }
        public long CNPJ { get; set; }

        public EmpresaModel(int Codigo, string Nome, string NomeFantasia, long CNPJ)
        {
            this.Codigo = Codigo;
            this.Nome = Nome;
            this.NomeFantasia = NomeFantasia;
            this.CNPJ = CNPJ;
        }
    }
}

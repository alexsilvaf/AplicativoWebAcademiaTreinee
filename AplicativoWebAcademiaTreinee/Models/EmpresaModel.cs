using System.ComponentModel.DataAnnotations;

namespace AplicativoWebAcademiaTreinee.Models
{
    public class EmpresaModel
    {
        [Key]
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public int NomeFantasia { get; set; }
        public long CNPJ { get; set; }

        
    }
}

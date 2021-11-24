using System.ComponentModel.DataAnnotations;

namespace AplicativoWebAcademiaTreinee.Models
{
    public class EmpresaModel
    {
        [Key]
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string NomeFantasia { get; set; }
        public string CNPJ { get; set; }                
    }
}

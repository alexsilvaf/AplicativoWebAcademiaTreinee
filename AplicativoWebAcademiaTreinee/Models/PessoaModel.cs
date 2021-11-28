using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AplicativoWebAcademiaTreinee.Models
{
    public class PessoaModel
    {
        [Key]
        public int Codigo { get; set; }
        [Display(Name = "Situação")]
        public string? Situacao { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        [Display(Name = "Data de Nascimento")]
        [DataType(DataType.Date)]
        public DateTime DataNascimento { get; set; }
        [Display(Name = "Quantidade de Filhos")]
        public int QuantidadeFilhos { get; set; }
        [Display(Name = "Salário")]
        public decimal Salario { get; set; }
    }
}

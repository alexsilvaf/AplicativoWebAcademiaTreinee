using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AplicativoWebAcademiaTreinee.Models;

namespace AplicativoWebAcademiaTreinee.Data
{
    public class AplicativoWebAcademiaTreineeContext : DbContext
    {
        public AplicativoWebAcademiaTreineeContext (DbContextOptions<AplicativoWebAcademiaTreineeContext> options)
            : base(options)
        {
        }

        public DbSet<AplicativoWebAcademiaTreinee.Models.PessoaModel> PessoaModel { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AplicativoWebAcademiaTreinee.Data;
using AplicativoWebAcademiaTreinee.Models;

namespace AplicativoWebAcademiaTreinee.Controllers
{
    public class PessoaModelsController : Controller
    {
        private readonly AplicativoWebAcademiaTreineeContext _context;

        public PessoaModelsController(AplicativoWebAcademiaTreineeContext context)
        {
            _context = context;
        }

        // GET: PessoaModels
        public async Task<IActionResult> Index()
        {
            return View(await _context.PessoaModel.ToListAsync());
        }

        // GET: PessoaModels/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pessoaModel = await _context.PessoaModel
                .FirstOrDefaultAsync(m => m.Codigo == id);
            if (pessoaModel == null)
            {
                return NotFound();
            }

            return View(pessoaModel);
        }

        // GET: PessoaModels/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: PessoaModels/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Codigo,Nome,Email,DataNascimento,QuantidadeFilhos,Salario")] PessoaModel pessoaModel)
        {

            if (pessoaModelEmailExists(pessoaModel.Email, pessoaModel))
            {
                ModelState.AddModelError("", "Erro: O e-mail informado já está cadastrado.");
                return View();
            }
            if (pessoaModel.DataNascimento <= DateTime.Parse("12/09/1990").Date)
            {
                ModelState.AddModelError("", "Erro: A data não pode ser anterior à 01/01/1990");
                return View();
            }
            if (pessoaModel.QuantidadeFilhos < 0)
            {
                ModelState.AddModelError("", "Erro: A quantidade de filhos não pdoe ser menor que 0.");
                return View();
            }
            if (pessoaModel.Salario < 1200)
            {
                ModelState.AddModelError("", "Erro: O salário não pode ser inferior à 1.200,00");
                return View();
            }
            if (pessoaModel.Salario > 13000)
            {
                ModelState.AddModelError("", "Erro: O salário não pode ser superior à 13.000,00");
                return View();
            }

            pessoaModel.Situacao = "Ativo";
            _context.Add(pessoaModel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
            return View(pessoaModel);
        }

        // GET: PessoaModels/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pessoaModel = await _context.PessoaModel.FindAsync(id);
            if (pessoaModel == null)
            {
                return NotFound();
            }
            if(pessoaModel.Situacao == "Inativo")
            {
                ModelState.AddModelError("", "Não é possível cadastrar uma pessoa inativa");
                return RedirectToAction(nameof(Index));
            }
            return View(pessoaModel);
        }

        // POST: PessoaModels/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Codigo, Situacao,Nome,Email,DataNascimento,QuantidadeFilhos,Salario")] PessoaModel pessoaModel)
        {            
            if (pessoaModelEmailExists(pessoaModel.Email, pessoaModel))
            {
                ModelState.AddModelError("", "Erro: O e-mail informado já está cadastrado.");
                return View();
            }
            if (id != pessoaModel.Codigo)
            {
                return NotFound();
            }
            if (pessoaModel.DataNascimento <= DateTime.Parse("12/09/1990").Date)
            {
                ModelState.AddModelError("", "Erro: A data não pode ser anterior à 01/01/1990");
                return View();
            }
            if (pessoaModel.QuantidadeFilhos < 0)
            {
                ModelState.AddModelError("", "Erro: A quantidade de filhos não pdoe ser menor que 0.");
                return View();
            }
            if (pessoaModel.Salario < 1200)
            {
                ModelState.AddModelError("", "Erro: O salário não pode ser inferior à 1.200,00");
                return View();
            }
            if (pessoaModel.Salario > 13000)
            {
                ModelState.AddModelError("", "Erro: O salário não pode ser superior à 13.000,00");
                return View();
            }

            try
            {
                _context.Update(pessoaModel);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PessoaModelExists(pessoaModel.Codigo))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }

        // GET: PessoaModels/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pessoaModel = await _context.PessoaModel
                .FirstOrDefaultAsync(m => m.Codigo == id);
            if (pessoaModel == null)
            {
                return NotFound();
            }

            return View(pessoaModel);
        }

        // POST: PessoaModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var pessoaModel = await _context.PessoaModel.FindAsync(id);
            if (pessoaModel.Situacao.Equals("Inativo"))
            {
                _context.PessoaModel.Remove(pessoaModel);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        //Verifica se o id da pessoa já existe no banco de dados.
        private bool PessoaModelExists(int id)
        {
            return _context.PessoaModel.Any(e => e.Codigo == id);
        }

        //Verifica se o email inserido no formulário já existe.
        private bool pessoaModelEmailExists(string email, PessoaModel pessoaModel)
        {
            return _context.PessoaModel.Any(e => e.Email == email && e.Codigo != pessoaModel.Codigo);;
        }


        //Pega o ID do objeto passado e altera a Situcação do mesmo.
        [HttpGet]
        public async Task<IActionResult> alterarStatus(int id)
        {
            var pessoaModel = await _context.PessoaModel.FindAsync(id);
            if (pessoaModel.Situacao.Equals("Ativo"))
            {
                pessoaModel.Situacao = "Inativo";
            }
            else
            {
                pessoaModel.Situacao = "Ativo";
            }
            _context.Update(pessoaModel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}

using AplicativoWebAcademiaTreinee.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AplicativoWebAcademiaTreinee.Controllers
{
    public class EmpresaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult Cadastro()
        {
            return View();
        }
        public ActionResult Edicao()
        {
            return View(new EmpresaModel());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind("Código, Nome, NomeFantasia, CNPJ")] EmpresaModel empresaModel)
        {
            int erro = 0;
            string[,] errors = new string[3, 2];
            if (empresaModel.Nome == null || empresaModel.Nome.Equals(""))
            {
                erro += 1;
                errors[0, 0] = "Nome";
                errors[0, 1] = "O nome da empresa não pode estar vazio";
            }
            if (empresaModel.NomeFantasia == null || empresaModel.NomeFantasia.Equals(""))
            {
                erro += 1;
                errors[1, 0] = "NomeFantasia";
                errors[1, 1] = "O nome fantasia da empresa não pode estar vazio";
            }
            if (empresaModel.CNPJ == null || empresaModel.CNPJ.Equals("") || empresaModel.CNPJ.Length != 14)
            {
                erro += 1;
                errors[2, 0] = "CNPJ";
                errors[2, 1] = "O CNPJ da empresa está incorreto";
            }
            if (erro > 0)
            {
                for (int i = 0; i < 3; i++)
                {
                    if (errors[i, 0] != null)
                    {
                        ModelState.AddModelError(errors[i, 0], errors[i, 1]);
                    }
                }
                return View("Index");
            }

            try
            {
                ModelState.AddModelError("Codigo", "Empresa cadastrada com sucesso!");
                return View("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}

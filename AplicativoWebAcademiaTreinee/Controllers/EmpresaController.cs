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
            if(empresaModel.Nome == null || empresaModel.Nome.Equals(""))
            {
                ModelState.AddModelError("", "O nome da empresa não pode estar vazio");
                return View("Index");
            }
            if (empresaModel.NomeFantasia == null || empresaModel.NomeFantasia.Equals(""))
            {
                ModelState.AddModelError("", "O nome fantasia da empresa não pode estar vazio");
                return View("Index");
            }
            if (empresaModel.CNPJ == null || empresaModel.CNPJ.Equals(""))
            {
                ModelState.AddModelError("", "O CNPJ da empresa não pode estar vazio");
                return View("Index");
            }

            try
            {
                return View("~/Views/Home/Index.cshtml");
            }
            catch
            {
                return View();
            }
        }
    }
}

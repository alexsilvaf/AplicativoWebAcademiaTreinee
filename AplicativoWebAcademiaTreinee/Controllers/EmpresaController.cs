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

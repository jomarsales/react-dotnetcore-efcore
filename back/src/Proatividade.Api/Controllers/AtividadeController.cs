using Microsoft.AspNetCore.Mvc;
using Proatividade.Api.Models;

namespace Proatividade.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>(){
            new Atividade{ Id = 1 },
            new Atividade{ Id = 2 },
            new Atividade{ Id = 3 },
            new Atividade{ Id = 4 },
        };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return Atividades.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public Atividade Post(Atividade atividade)
        {
            return (Atividade)Atividades.Append<Atividade>(atividade);
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            atividade.Id += 1;

            return atividade;
        }

        [HttpDelete("{id}")]
        public string Delete(int id)  
        {
            return "Hello World! - Delete";
        }
    }
}
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using pp1_api.Api.Models;
using pp1_api.Api.Services;

namespace pp1_api.Api.Controllers
{
    [ApiController]
    [Route("api/people")]
    public class PeopleController : ControllerBase
    {
            private IPeopleRepository repository;
            public PeopleController(IPeopleRepository peopleRepository)
            {
                repository = peopleRepository ??
                    throw new ArgumentNullException(nameof(peopleRepository));
            }    
            [HttpGet]
            public IActionResult GetPeople()
        {
            var result = repository.GetAllPeople();
            if (result == null)
            {  
                return NotFound();
            }
            return Ok(result);
        }
    }
}
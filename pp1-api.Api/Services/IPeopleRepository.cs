using System.Collections.Generic;
using pp1_api.Api.Models;

namespace pp1_api.Api.Services
{
    public interface IPeopleRepository
    {
        IEnumerable<Person> GetAllPeople();
    }
}
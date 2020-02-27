using System.Collections.Generic;
using pp1_api.Api.Models;

namespace pp1_api.Api.Services
{
    public class PeopleRepository : IPeopleRepository
    {
        private List<Person> _people = new List<Person>()
        {
            new Person{ Id = 1, First_Name = "Brad", Last_Name = "Kaes" }
        };
        public IEnumerable<Person> GetAllPeople()
        {
            return _people;
        }
    }
}
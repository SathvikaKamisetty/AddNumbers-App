using NUnit.Framework;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;

namespace MyApp.Tests
{
    public class AddApiTests
    {
        private HttpClient _client;

        [SetUp]
        public void Setup()
        {
            var factory = new WebApplicationFactory<MyApp.Program>();
            _client = factory.CreateClient();
        }

        [Test]
        public async Task Add_TwoPositiveNumbers_ReturnsCorrectSum()
        {
            var response = await _client.GetAsync("/api/add?a=2&b=3");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("5", result);
        }

        [Test]
        public async Task Add_WithZero_ReturnsOtherNumber()
        {
            var response = await _client.GetAsync("/api/add?a=0&b=9");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("9", result);
        }

        [Test]
        public async Task Add_WithNegativeNumber_ReturnsCorrectSum()
        {
            var response = await _client.GetAsync("/api/add?a=4&b=-2");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("2", result);
        }

        [Test]
        public async Task Add_WithNegativeNumber_ReturnsCorrectSum()
        {
            var response = await _client.GetAsync("/api/add?a=4&b=-2");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("2", result);
        }

        [Test]
        public async Task Add_WithNegativeNumber_ReturnsCorrectSum()
        {
            var response = await _client.GetAsync("/api/add?a=4&b=-2");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("2", result);
        }

        [Test]
        public async Task Add_WithNegativeNumber_ReturnsCorrectSum()
        {
            var response = await _client.GetAsync("/api/add?a=0&b=-2");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("-2", result);
        }

         [Test]
        public async Task Add_WithNegativeNumber_ReturnsCorrectSum()
        {
            var response = await _client.GetAsync("/api/add?a=0&b=-2");
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("-2", result);
        }


       [Test]
  public async Task Add_WithNegativeAndPositive_ReturnsCorrectSum()
{
    var response = await _client.GetAsync("/api/add?a=-4&b=6");
    response.EnsureSuccessStatusCode();

    var result = await response.Content.ReadAsStringAsync();
    Assert.AreEqual("2", result);
}

        [Test]
  public async Task Add_WithNegativeAndPositive_ReturnsCorrectSum()
{
    var response = await _client.GetAsync("/api/add?a=30&b=60");
    response.EnsureSuccessStatusCode();

    var result = await response.Content.ReadAsStringAsync();
    Assert.AreEqual("90", result);
}

        //adding 2 test cases
          [Test]
  public async Task Add_WithNegativeAndPositive_ReturnsCorrectSum()
{
    var response = await _client.GetAsync("/api/add?a=5&b=5");
    response.EnsureSuccessStatusCode();

    var result = await response.Content.ReadAsStringAsync();
    Assert.AreEqual("10", result);
}

        [Test]
  public async Task Add_WithNegativeAndPositive_ReturnsCorrectSum()
{
    var response = await _client.GetAsync("/api/add?a=5&b=15");
    response.EnsureSuccessStatusCode();

    var result = await response.Content.ReadAsStringAsync();
    Assert.AreEqual("20", result);
}
         [Test] 
         public async Task Add_WithNegativeAndPositive_ReturnsCorrectSum()
{
    var response = await _client.GetAsync("/api/add?a=10&b=15");
    response.EnsureSuccessStatusCode();

    var result = await response.Content.ReadAsStringAsync();
    Assert.AreEqual("25", result);
}

        
     }
}

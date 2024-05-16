import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HeroServiceForLab } from "./hero.lab.service";
import { TestBed } from "@angular/core/testing";

describe("3-hero service (http) integration testing:", () => {
  let httpTesting: HttpTestingController;
  let heroService: HeroServiceForLab;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        // ... other test providers
        HeroServiceForLab
      ],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    heroService = TestBed.inject(HeroServiceForLab);
  });


  it("getHeroes function: send request and receive response successfully", () => {
    heroService.getHeroes().subscribe(data => {
      expect(data[0].id).toBe(1);
    });
    const req = httpTesting.expectOne("http://localhost:3000/heroes");
    expect(req.request.method).toBe("GET");
    req.flush([{ id: 1, name: "Bat man", strength: 12 }]);
  });
  it("updateHero function: send request and receive response successfully", () => {
    heroService.updateHero({ id: 1, name: "Spider man", strength: 10 }).subscribe((data)=>{
      expect(data.name).toBe("Spider man");
    });
    const req = httpTesting.expectOne("http://localhost:3000/heroes");
    expect(req.request.method).toBe("PUT");
    req.flush({ id: 1, name: "Spider man", strength: 10 });
  })
})
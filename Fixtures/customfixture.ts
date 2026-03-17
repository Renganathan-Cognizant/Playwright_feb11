import { test as basetest } from '@playwright/test';

// Custom type annotations in TS
type Testfixture = {
  testfixture: string;
};

type worker = {
  workerfixture: any;
};

//basetest.extend - Extend playwright test with custom fixture
//fixture 1 - Test level fixture
//worker - worker level fixture

//Test fixture implementation
//{} - dependency fixtures
//use -> function that provides fixture value
//before use() runs before test starts
//control flow : code --> Fixture Setup --> await use() --> Test executes --> control returns
 export const test = basetest.extend<Testfixture,worker>({
  testfixture: async ({}, use) => {
    const testfixture = "Playwright Sep batch";
    console.log("before executing use statement - Testfixture"); //before test starts
    await use(testfixture); //give this value to the test, execution pauses here until test gets completed
    console.log("after executing use Testfixture"); //after use()
  },

  //worker fixture syntax is array format [fixturefunctions, options]
  workerfixture: [
    async ({}, use) => {
      const workerfixture = "worker fixture"; //creates worker fixture value
      console.log("before executing worker fixture"); //runs before test starts in worker
      await use(workerfixture); // now workerfixture available to tests
      console.log("after executing worker fixture"); //runs after all tests in worker complete
    },
    { scope: 'worker' } //worker fixture always executes once per worker
  ]
});


//1. test fixture - whenever requested test method, it rerun every test
//2.worker fixture : it will run only once per worker
//test fixture




// import {test as basetest} from '@playwright/test';

// //custom type annotations in TS
// //my own created data type
// type fixture1={
//     fixture1:String
// }

// type worker = {
//     workerfixture:any;
// }

// //export const test=

// export const test=basetest.extend<fixture1, worker>({
//     fixture1:async({},use)=>{ //
//         //before use
//         const fixture1 = "Playwright Sep batch"
//         console.log("before executing use statement - fixture 1")
//         //use - will run the test from where fixture is called
//         await use(fixture1) //control goes to spec file
//         //after use
//         console.log("after executing use fixture 1")
//     },

//     workerfixture:[
//         async({},use)=>{
//         //before
//         const workerfixture = "worker fixture"
//         console.log("before executing worker fixture")
//         //use - will run the test from where fixture is called
//         await use(workerfixture)
//         //after
//         console.log("after executing worker fixture"),
//         {scope:"worker"}
//     }]
// })



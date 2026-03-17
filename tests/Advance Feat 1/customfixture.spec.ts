//types of fixture
//1.test fixture-requested by test and gets rerun per test

import {test} from '../../Fixtures/customfixture'

// test("test1", async({testfixture})=>{
//     console.log(`use statement execution : ${testfixture}`) //playwright sep batch
// })

// test("test2", async({testfixture})=>{
//     console.log(`use statement execution : ${testfixture}`) //playwright sep batch
// })

// test("test&worker",async({testfixture,workerfixture})=>{
//     console.log(`use statement execution : ${workerfixture}`)
//     console.log(`use statement execution : ${testfixture}`)
// })

test("testfixture",async({testfixture})=>{
    console.log(`use statement execution : ${testfixture}`)
})

// test("workerfixture",async({workerfixture})=>{
//     console.log(`use statement execution : ${workerfixture}`)
// })



//2.Worker fixture - runs only once per worker
/*
worker fixture setup - before executing worker fixture
test fixture setup - before executing use statement - fixture 1
test runs - use statement execution "Playwright Sep batch"
            use statement execution : worker fixture
test fixture teardown - after executing use fixture 1
worker fixture teardown - after executing worker fixture
*/
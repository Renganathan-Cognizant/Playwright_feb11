import {test} from '../../Fixtures/pomfixture'

test("POM fixture demo", async({loginpage,checkoutpage,productselection})=>{
    //login
    await loginpage.launchApp()
    await loginpage.login()

    //to select product
    await productselection.SelectProduct()

    //checkout
    await checkoutpage.checkout()
})

/*
test()
playwright starts test
pomfixture.ts
creates objects
injects into test
Test calls the methods
method interact in browser
*/
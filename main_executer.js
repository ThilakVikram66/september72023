let parent_asins = require("./child/parent_asin_getter");
let variation_asins = require("./child/variation_asin_getter");
let asin_content_getter = require("./child/asin_content_getter");
const fs = require("fs");
let url = "https://www.amazon.com/gp/bestsellers/automotive/15735581/ref=pd_zg_hrsr_automotive";

starter(url);
async function starter(url)
{
    fs.writeFile("result.json","",(err)=>{
        if(err)
        {
            console.log("cleared successfully");
        }
    })
    let information_holder = [];
    let all_asins = [];
    let asins = await parent_asins(url);
    console.log(asins);
    for(var p_asin of asins){
    console.log("P_entered");
        let v_asins = await variation_asins(p_asin);
        for(var c_asin of v_asins)
        {
            console.log("V_entered");
            let content_main = await asin_content_getter(c_asin,p_asin);
            console.log("output");
            console.log(content_main);
            information_holder.push(content_main);
            console.clear();
            console.table(information_holder);
            fs.writeFile("result.json",JSON.stringify(information_holder),err=>{
                if(err)
                {
                    console.log("error on fs");
                }
                else
                {
                    console.log("success Stored");
                }
            })
        }
    };
}

















// await page.goto(`https://www.amazon.com/product-reviews/${asin}?th=1&formatType=current_format`);

// content = await page.evaluate(content=>{
//     content["rating_review"] = document.querySelectorAll("[data-hook = cr-filter-info-review-rating-count]")[0].textContent.trim();        
// },content);
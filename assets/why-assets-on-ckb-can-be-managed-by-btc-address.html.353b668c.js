import{_ as s,r as i,o,c as r,a,b as n,e as h,d as e}from"./app.6dc8cf16.js";const c={},d=h('<h1 id="why-assets-on-ckb-can-be-managed-by-btc-address" tabindex="-1"><a class="header-anchor" href="#why-assets-on-ckb-can-be-managed-by-btc-address" aria-hidden="true">#</a> Why assets on CKB can be managed by BTC address</h1><h2 id="first-this-is-not-cross-chain" tabindex="-1"><a class="header-anchor" href="#first-this-is-not-cross-chain" aria-hidden="true">#</a> First, this is not &quot;cross-chain&quot;</h2><p>Cross-chain usually means assets are locked on chain A and corresponding assets are created on chain B. In fact, assets on Nervos CKB will not appear on BTC, nor assets on BTC will appear on Nervos CKB. Nervos CKB is simply compatible with any public chain&#39;s account (address) system.</p><h2 id="understanding-from-a-non-technical-perspective" tabindex="-1"><a class="header-anchor" href="#understanding-from-a-non-technical-perspective" aria-hidden="true">#</a> Understanding from a non-technical perspective</h2><p>Let&#39;s make some analogies. Let&#39;s compare a public chain to a country, and the address of that public chain is compared to the resident ID of that country.</p><ol><li>ETH public chain --&gt; United States</li><li>ETH address --&gt; U.S. ID card</li><li>BTC public chain --&gt; United Kingdom</li><li>BTC Address --&gt; UK ID</li><li>Nervos CKB Public Chain --&gt; Country C</li><li>Nervos CKB Address --&gt; Country C ID</li></ol><p>Currently, the residents must have a US ID to hold and manage assets in the US, and the same is true for the UK. The two countries do not recognize each other&#39;s national IDs.</p><p>However, for Nervos CKB, a new C country, not only residents with C country IDs can hold assets in their country. Residents of other countries can also hold assets in Country C as long as they provide a valid resident ID from another country.</p><p>By further analogy, a BTC user sending assets issued on the Nervos CKB in a BTC wallet is like a U.S. resident reselling his or her home in Country C with a valid U.S. ID. And this resale process is officially recognized by country C (verified by the Nervos CKB node).</p><h2 id="technical-understanding" tabindex="-1"><a class="header-anchor" href="#technical-understanding" aria-hidden="true">#</a> Technical Understanding</h2><p>Nervos CKB is compatible with BTC&#39;s account system, which means that <strong>Nervos CKB is a chain that verifies the signature of a BTC private key on a Nervos CKB transaction</strong>.</p><ol><li>the BTC chain can only verify the signature of the BTC private key to a BTC transaction, as does ETH. When the signature checks out and the transaction is on the chain, it means that you control your BTC assets with your BTC private key.</li><li>At the same time, the signature algorithm of the BTC/ETH chain is fixed, and the logic of the signature verification process is also fixed. To add a new signature algorithm, you have to hard fork the entire chain.</li></ol><p>However, Nervos CKB has some new features.</p><ol><li>When adding a new signature algorithm to a Nervos CKB chain, the CKB is not hard forked and the new signature algorithm is installed on the Nervos CKB as if it was a plug-in.</li><li>Any one at any time can deploy any signature algorithm on a Nervos CKB (it&#39;s just a binary program).</li><li>When a transaction happens on the Nervos CKB, you can specify which signature algorithm needs to be invoked to verify the transaction.</li><li>When the Nervos CKB node packages the transaction, it runs that particular signature algorithm to verify the transaction. When the checksum passes, the transaction is uploaded to the chain.</li></ol><p>That&#39;s why we can install the BTC signature algorithm on the Nervos CKB and make it clear in the transaction (which is generally a transfer of fungible or non-fungible tokens) that the node must invoke the BTC signature algorithm to perform the checksum when packaging the transaction. When the signature verification is passed, the transaction is uploaded to the chain and the asset transfer is completed, which means you control your Nervos CKB assets with your BTC private key.</p><p>For the same reason we can install any public chain&#39;s signature algorithm on Nervos CKB and then any public chain address can hold assets issued on the Nervos CKB.</p>',16),l=e('Such an elegant "cross-chain" approach was inspired by the '),u={href:"https://lay2.tech/#/",target:"_blank",rel:"noopener noreferrer"},p=e("Lay2"),y=e(" team. The "),g={href:"https://docs.lay2.dev/pw-sdk/",target:"_blank",rel:"noopener noreferrer"},m=e("PW-SDK"),C=e(" they built is the infrastructure of the Nervos ecosystem and is the core secret of how .bit accounts can be held by any public chain address. \u2764");function f(v,B){const t=i("ExternalLinkIcon");return o(),r("div",null,[d,a("p",null,[l,a("a",u,[p,n(t)]),y,a("a",g,[m,n(t)]),C])])}var w=s(c,[["render",f],["__file","why-assets-on-ckb-can-be-managed-by-btc-address.html.vue"]]);export{w as default};

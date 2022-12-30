let url = window.location.href
const pattern = /(?:codechef\.com\/problems\/)/
if(pattern.test(url)){
    window.location.href = url.replace(pattern,"codechef.com/problems-old/")
}

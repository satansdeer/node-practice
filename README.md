# 2020-06-27 - Week 5

* CSRF
    https://en.wikipedia.org/wiki/Cross-site_request_forgery
  * OWASP Cross-Site Request Forgery Prevention Cheat Sheet
    https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
* csurf

* Helmet
    * https://helmetjs.github.io/
    * Inspect:
        ```
            curl http://localhost:3000 --include
        ```
    * Add helmet
        * `yarn add helmet`
    * X-DNS-Prefetch-Control: off
        * https://helmetjs.github.io/docs/dns-prefetch-control/
    * X-Frame-Options: SAMEORIGIN
        * https://helmetjs.github.io/docs/frameguard/
    * Strict-Transport-Security: max-age=15552000; includeSubDomains
        * https://helmetjs.github.io/docs/hsts/
    * X-Download-Options: noopen
        * https://helmetjs.github.io/docs/ienoopen/
    * X-Content-Type-Options: nosniff
        * https://helmetjs.github.io/docs/dont-sniff-mimetype/
    * X-XSS-Protection: 1; mode=block
        * https://helmetjs.github.io/docs/xss-filter/
* Overall Security
  https://owasp.org/www-project-top-ten/
* Owasp Tutorial
  https://nodegoat.herokuapp.com/tutorial
  https://github.com/WebGoat/WebGoat
  https://nodegoat.herokuapp.com/login


* DomPurify
    * https://github.com/cure53/DOMPurify

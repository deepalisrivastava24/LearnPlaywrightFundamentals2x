# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\02_TestVWODashboard.spec.ts >> go directly to dashboard — no login
- Location: tests\04_Session_Storage\02_TestVWODashboard.spec.ts:9:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: page.waitForURL: Timeout 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

```
Tearing down "context" exceeded the test timeout of 60000ms.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "Wingify" [ref=e12]
        - paragraph [ref=e13]: Sign in to Wingify platform
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18] [cursor=pointer]: Email address
            - textbox "Email address" [active] [ref=e20]:
              - /placeholder: Enter email ID
              - text: opg73@singleuseemail.site
          - listitem [ref=e21]:
            - generic [ref=e22] [cursor=pointer]: Password
            - generic [ref=e23]:
              - textbox "Password" [ref=e24]:
                - /placeholder: Enter password
              - button "Toggle password visibility" [ref=e25] [cursor=pointer]:
                - img [ref=e26]
          - listitem [ref=e28]:
            - button "Forgot Password?" [ref=e29] [cursor=pointer]
          - listitem [ref=e30]:
            - generic [ref=e32] [cursor=pointer]:
              - generic [ref=e33]: Remember me
              - img [ref=e35]
          - listitem [ref=e37]:
            - button "Sign in" [ref=e38] [cursor=pointer]:
              - generic [ref=e39]: Sign in
          - listitem [ref=e40]:
            - heading "Or" [level=6] [ref=e42]
          - listitem [ref=e44]:
            - button "Sign in with Google" [ref=e46] [cursor=pointer]:
              - generic [ref=e47]:
                - img [ref=e48]
                - generic [ref=e50]: Sign in with Google
          - listitem [ref=e52]:
            - button "Sign in using SSO" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
              - generic [ref=e56]: Sign in using SSO
          - listitem [ref=e57]:
            - button "Sign in with Passkey" [ref=e58] [cursor=pointer]:
              - img [ref=e59]
              - generic [ref=e61]: Sign in with Passkey
          - listitem [ref=e62]:
            - text: Don't have an account?
            - link "Start a free trial" [ref=e63] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
          - listitem [ref=e64]:
            - text: By continuing, you agree to Wingify's
            - link "Privacy policy" [ref=e65] [cursor=pointer]:
              - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e66] [cursor=pointer]:
              - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e71]:
        - generic [ref=e72]:
          - img "Wingify abtasty logo" [ref=e73]
          - img [ref=e74]
          - img "Wingify abtasty logo" [ref=e76]
        - heading "Welcome to Wingify!" [level=1] [ref=e77]
        - heading "app.vwo.com has transitioned to app.wingify.com" [level=2] [ref=e78]
        - heading "Your plans, features, and data remain unchanged." [level=2] [ref=e79]
        - link "Learn More" [ref=e80] [cursor=pointer]:
          - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
          - generic [ref=e81]: Learn More
          - img [ref=e82]
  - img [ref=e84]:
    - generic: "'"
    - generic:
      - img
  - img [ref=e85]
  - img [ref=e86]
  - img [ref=e87]
  - img [ref=e88]
  - img [ref=e89]
  - img [ref=e90]
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - img [ref=e95]
  - img [ref=e96]
  - img [ref=e97]
  - img [ref=e98]
  - img [ref=e99]
  - img [ref=e100]
  - img [ref=e101]
```
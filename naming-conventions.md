# 📘 Naming Conventions for Cypress + TypeScript (Page Object Model)

This document defines the **official naming conventions and standards** for working with Cypress + TypeScript using the Page Object Model (POM).  
It is intended to ensure consistency, clarity, and maintainability across all test automation code.

---

## 🧱 General TypeScript Standards

✅ Use `PascalCase` for class names:

```ts
class LoginPage { ... }
```

✅ Use `camelCase` for method and variable names:

```ts
loginAs();
verifyCartItemCount();
```

✅ Always include return types in methods:

```ts
public loginAs(username: string, password: string): void { ... }
```

✅ Chain Cypress commands in multiple lines for readability:

```ts
this.cartCountBadge().should("be.visible").and("have.text", expected.toString());
```

✅ One public method = one clear responsibility.

---

## 🧾 Element Naming Convention: `[description][type]`

| UI Element Type | Suffix          | Example                         |
| --------------- | --------------- | ------------------------------- |
| Text field      | `Txt`           | `usernameTxt`, `emailTxt`       |
| Text area       | `TxtArea`       | `commentsTxtArea`               |
| Button          | `Btn`           | `loginBtn`, `submitBtn`         |
| Label           | `Lbl`           | `errorMsgLbl`, `cartCountLbl`   |
| Dropdown        | `Ddl`           | `countryDdl`, `sortDdl`         |
| Checkbox        | `Chk`           | `acceptTermsChk`                |
| Radio Button    | `Rdo`           | `genderMaleRdo`                 |
| Image           | `Img`           | `logoImg`, `avatarImg`          |
| Link            | `Lnk`           | `forgotPasswordLnk`             |
| Icon            | `Icon`          | `cartIcon`, `menuIcon`          |
| Badge           | `Badge`         | `cartCountBadge`, `notifBadge`  |
| Table           | `Tbl`           | `ordersTbl`, `productsTbl`      |
| Table Row       | `Row`           | `firstProductRow`               |
| Table Cell      | `Cell`          | `priceCell`, `qtyCell`          |
| Panel/Box       | `Box` / `Panel` | `loginBox`, `cartPanel`         |
| Modal/Dialog    | `Modal`         | `confirmModal`, `errorModal`    |
| Page Section    | `Section`       | `profileSection`, `cartSection` |

---

## 🌟 Best Practices

✅ Keep selectors inside Page Object classes, never in test specs.  
✅ Use `data-test` or `data-testid` attributes for stable selectors.  
✅ Avoid duplicated logic in multiple tests — reuse Page Object methods.  
✅ Group page methods by behavior (actions, assertions, navigation).  
✅ Keep tests short and meaningful — 1 test = 1 clear user flow.

---

## 📂 Suggested Project Structure

```
cypress/
├── e2e/        # test specs
├── fixtures/   # test data
├── pages/      # Page Object classes
├── support/    # custom commands, helpers
naming-conventions.md
README.md
```

# Login Practice Page — Basic Operations Test Plan

## Application Overview

Exploratory plan for the supplied Rahul Shetty Academy LoginPage Practise URL (https://rahulshettyacademy.com/loginpagePractise/). The page provides username/password fields, Admin/User radio options, a Student/Teacher/Consultant dropdown, a terms checkbox, and Sign In. Exploration confirmed empty-submit feedback, invalid-credential feedback, and successful sign-in to the ProtoCommerce shop using the demo credentials displayed on the page. These are login-page tests, not Todo-app tests.

## Test Scenarios

### 1. Login page basic operations

**Seed:** `seed.spec.ts`

#### 1.1. should display the login form and default selections

**File:** `tests/login-page/initial-form-state.spec.ts`

**Steps:**
  1. Open https://rahulshettyacademy.com/loginpagePractise/
    - expect: LoginPage Practise is shown
    - expect: Username and Password fields, Admin/User radio options, role dropdown, terms checkbox, and Sign In button are visible
    - expect: Admin is selected, Student is selected, and the terms checkbox is unchecked

#### 1.2. should show validation feedback when submitting empty credentials

**File:** `tests/login-page/empty-submit.spec.ts`

**Steps:**
  1. Open the login page and click Sign In without entering either credential
    - expect: An Empty username/password message appears
    - expect: The user remains on the login page

#### 1.3. should reject invalid credentials

**File:** `tests/login-page/invalid-credentials.spec.ts`

**Steps:**
  1. Enter an invalid username and password, then click Sign In
    - expect: An Incorrect username/password message appears
    - expect: The user remains on the login page

#### 1.4. should allow changing role, user type, and terms consent

**File:** `tests/login-page/form-options.spec.ts`

**Steps:**
  1. Select User, change the dropdown to Teacher and then Consultant, and toggle the terms checkbox
    - expect: Only the selected radio option is checked
    - expect: The dropdown reflects the selected option
    - expect: The terms checkbox can be checked and unchecked

#### 1.5. should sign in with the displayed demo credentials

**File:** `tests/login-page/successful-login.spec.ts`

**Steps:**
  1. Enter the demo username and password shown on the page, keep Admin and Student selected, check the terms checkbox, and click Sign In
    - expect: The browser navigates to https://rahulshettyacademy.com/angularpractice/shop
    - expect: The destination page title is ProtoCommerce

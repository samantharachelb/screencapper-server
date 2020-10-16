# Contributing

:tada: Thanks for taking the time to contribute to the MaterialUI Swift Project! :tada:

The following document contains the guidelines for contributing to the Project. While these may be
"guidelines" and not exactly "rules", community members and contributors are asked to use their best
judgement when interacting with this project.

#### Table of contents
[Code of Conduct](#code-of-conduct)

[Contributing 101](#contributing-101)
* [Reporting Bugs](#reporting-bugs)
* [Feature Requests](#feature-requests)
* [Pull Requests](#pull-requests)

[Style Guide]
* [Git Commit Messages](#git-commit-messages)
* [Swift Style Guide](#swift-style-guide)

[TL;DR](#tl-dr)

## Code of conduct
This project and everyone participating in it are governed by the
[Contributor Code of Conduct](code_of_conduct.md). By participating, you are expected to uphold and follow this
code. Any and all unacceptable behaviour should be reported to the [project's owner](project-owner).

## Contributing 101
### Reporting Bugs
This section will guide you through the process of submitting a bug report. Following these guidelines will help
maintainers and community contributors understand the report, reproduce the problem, and find related reports.

Before creating a bug-report, please check both the project's current [issues](issues) and the guidelines below
before doing so, as it may be unnecessary to create a new bug report.

> **Please Note**: If you find an issue that has been **closed** but it seems like it may be similar and/or
related to the bug that you're reporting, include a link to that issue in the body of your bug reports

#### Before Creating a Bug Report
- [Search](search-issues) through the project's current issues to see if the bug/problem has already been
reported **and** if that issue is still open.
- See if you can reproduce the issue by:
  - Updating the framework.
  - Fresh installation of the framework.
  - Installing the app on a different device.
- Ensure you are **not** using a test version of the framework.
- Ensure that your device is using and **official** build and not a **development** build of its operating
system.

#### How Do I Submit a (Good) Bug Report?
Once you have determined that the bug is reproducible **and** there is no *open* issue related to your problem,
create an issue and provide the following information by filling in the template.

Explain the problem in detail and include additional details to help maintainers reproduce the problem.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps taken that reproduce the problem** with as many details as possible. When listing
steps, **do not just say what you did, but explain how you did it**.
- **Provide specific examples to demonstrate the steps**.
- **Describe the behaviour you observed after following the steps** and point out the problem with that behaviour.
- **Explain the behaviour you expected and why**.
- **Include screenshots and/or GIFs** that show you following the described steps and clearly demonstrate the
problem.
- **If you're reporting a crash**, include the date and time that crash happened.
- **If the problem wasn’t triggered by a specific action**, describe what you were doing before the problem
occurred and include more information following the guidelines below.

Provide more context by answering these questions:

- **Did this problem start recently** (e.g. after updating to a new version of framework or updating the
  device's operating system)?
- **Can you reliably reproduce this issue?** If not provide details about how often this problem occurs and the condition it usually occurs under.

Include details about the device and application:
- **Which version of the application are you using?**
- **Device Specifications**
  - Operating System (e.g. iOS 13.4)
  - Device Model (e.g. iPhone XS Max)

### Feature Requests and Suggestions
This section will guide you through submitting a feature request and/or suggestion, including *new* features and
*minor* improvements to the existing framework. Before submitting a new feature request, please check to see
if there is a similar feature request/suggestion that is **open**.

#### How Do I Submit a (Good) Feature Request/Suggestion?
Like bugs, feature requests and suggestions are also tracked through GitHub issues. Once you've confirmed that
a similar request isn't already open, go ahead and create an issue and provide the following information by
filling in the template.

- **Use a clear and descriptive title** for the issue to identify the request/suggestion.
- **Provide a step-by-step description of the request/suggestion** including as many details as possible.
- **Provide specific examples to demonstrate the steps**
- **Explain why this enhancement would be useful or should be included**.

### Pull Requests
The process described here has several goals:

- Maintain the framework's quality.
- Fix problems that are important to uses.
- Engage the community in working toward the best possible version of the application.

Please follow these steps to have your contribution considered by the maintainers:

- Follow all the instructions in the template

- Follow the style guide

- After you submit your pull request, verify that all status checks are passing

  <details><summary>What if my status checks are failing?</summary><br />If a status check is failing and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you, and if we conclude that the failure was raised in error, we will then open an issue to track the problem with the status checks.</details>

- In addition to satisfying the prerequisites listed above, the maintainers may ask you to complete additional work, tests and/or other changes before your pull request can be accepted.

### Git Commit Messages
- Use the present tense (“Add feature” not “Added feature")
- Use the imperative mood (“Move block to...” not “Moves block to...")
- Limit the **first line** to **72 characters or less**
- Reference issues and pull requests liberally after the first line
- When **only** changing documentation, include `[ci skip]` in the commit title
- Consider starting the commit message with an applicable emoji:
  - :alembic:  `:alembic:` experimenting with new things
  - :alien:  `:alien:` updating code due to *external* API changes
  - :ambulance:  `:ambulance:` critical hotfix
  - :art: ​ ​`:art:` improving the structure/format of the code
  - :bento:  `:bento:` adding or updating assets
  - :beers:  `:beers` code written after having a few drinks
  - :boom:  `:boom:` introducing breaking changes
  - :bug:   `:bug:` fixing bugs
  - :building_construction:  `:building_construction:` making architectural changes
  - :construction:  `:construction:` work in progress
  - :construction_worker_woman:  `:construction_worker` adding CI tests
  - :egg:  `:egg:`  adding an easter egg
  - :fire:   `:fire:` removing code or files
  - :globe_with_meridians:  `:globe_with_meridians:` internationalization and localization work
  - :page_facing_up:  `:page_facing_up:` adding/updating license
  - :paintbrush:  `paintbrush` adding/updating styleguide
  - :pencil:  `:pencil:` writing docs
  - :pill:  `:pill:` adderall fuelled code sprint
  - :poop:  `:poop:` writing bad code that needs to be improved
  - :recycle:  `:recycle:` refactoring code
  - :rotating_light:  `:rotating_light` removed linter warnings
  - :see_no_evil:   `:see_no_evil` adding/updating .gitignore
  - :spaghetti:   `:spaghetti:` real chef™ moments when writing code and really needs to be improved
  - :sparkles:  `:sparkles:`  introducing new features
  - :tada:  `:tada:` new repository
  - :train:  `:train:` moving or renaming files
  - :wastebasket:  `:wastebasket:` deprecating code that needs to be cleaned up
  - :white_check_mark:  `:white_check_mark:` updating CI tests
  - :zap: ​ `:zap:`  improving performance

## TL;DR
We get it you don't want to read all of that so here's a summary.
- This project and everyone participating follow a [Code of Conduct](code-of-conduct)
- Check to see if the issue already exists before creating a new bug report, feature request, or suggestion.
- Be as descriptive as possible in your bug report, feature request, or suggestion.
- Pull requests are subject to quality checks and shouldn't overwhelm the project maintainers.
- If you're contributing to the project be sure to follow the guidelines in the section on [Git commit messages](#git-commit-messages) and the [Swift Style Guide](style-guide)
- Do not contribute garbage.

[project-owner]: mailto:me@samantharachelb.ca
[issues]: https://github.com/samantharachelb/MaterialUI-Swift/issues
[search-issues]: https://github.com/samantharachelb/MaterialUI-Swift/issues?q=is%3Aissue+is%3Aopen+
[style-guide]: https://github.com/samantharachelb/MaterialUI-Swift/blob/master/.github/styleguide.md
[code-of-conduct]: https://github.com/samantharachelb/MaterialUI-Swift/blob/master/.github/code_of_conduct.md

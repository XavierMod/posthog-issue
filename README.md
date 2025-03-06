This is a very tiny vue 3 application I set up to showcase a PostHog bug.

Link to the issue: https://github.com/PostHog/posthog-js/issues/1766

# Steps to reproduce

The current application will render a false statement, showing how `onFeatureFlags` isn't working correctly. (its callback isn't triggering)

Changing the version from anything above 2.0 to `"posthog-js": "1.199.0"` renders the statement true (callback does work for older versions)

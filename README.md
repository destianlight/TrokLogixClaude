# TrokLogix 2

Drivers photograph fuel slips, weighbridge tickets, odometers and receipts; one AI vision call reads them; owners review, approve and report.

ASP.NET Core 10 Razor Pages · SQL Server · Bootstrap 5.3.9 (self-hosted) · SignalR · Chart.js

## Status

Skeleton: landing page only. Part 1 (company registration and login) is next.

## Run locally

Needs the .NET 10 SDK.

```bash
dotnet run --project src/TrokLogix.Web
```

## Build on GitHub

Every push to `main` builds the app with GitHub Actions (`.github/workflows/build.yml`). The published site can be downloaded from the run's page under **Artifacts**.

## Layout

```
src/TrokLogix.Web/
  Pages/            Razor Pages, one folder per section
  wwwroot/css       site.css (brand styles on top of Bootstrap)
  wwwroot/js        site.js (small, site-wide)
  wwwroot/icons     icons.svg (one sprite; add a <symbol> to add an icon)
  wwwroot/fonts     Saira headings
  wwwroot/lib       Bootstrap 5.3.9
```

Icons are used like this:

```html
<svg class="tl-icon" aria-hidden="true"><use href="/icons/icons.svg#fuel-pump"></use></svg>
```

Available: truck, fuel-pump, speedometer2, receipt, plus-lg, person, camera, check-lg, x-lg, scale, tl-mark.

## Rules

- No secrets in the repository. Use user secrets locally and environment settings on the host.
- Light and dark mode follow the phone's setting.

## Credits

Bootstrap and Bootstrap Icons (MIT). Saira font (SIL Open Font License).

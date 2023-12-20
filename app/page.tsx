import * as Icon from "./components/icons";
import { garamound } from "./utils/font";
import { List, ListItem } from "./components/list";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-start px-56">
      <div className="flex flex-col items-start min-h-screen w-full">
        <div className="pt-64">
          <h1 className="font-medium text-4xl text-gray-800 mb-2">
            Keevan Dance
          </h1>
          <p className={`${garamound.className} text-xl text-gray-500 mb-3`}>
            🇰🇷 Seoul-based software engineer looking for their next oppurtunity.
          </p>
          <p className="font-normal text-sm text-gray-800 max-w-lg mb-2">
            I've spent 8+ years building consumer-facing products between
            Phoenix, Chicago, Seattle, and now Seoul.
          </p>
          <p className="font-normal text-sm text-gray-800 max-w-lg mb-4">
            My work has spanned from accessibility on Microsoft's App Center, to
            backend usage-based billing systems at Github, to front-ends for
            streaming apps at Allstate.
          </p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <Icon.Instagram />
            <Icon.GitHub />
            <Icon.Twitter />
            <Icon.LinkedIn />
            <Icon.Email />
          </div>
        </div>
      </div>
      <div className="pt-12 w-full pb-36">
        <List>
          <ListItem
            date="2020-2023"
            logo="/GitHub.png"
            alt="GitHub logo"
            jobTitle={() => (
              <>
                <span className="text-gray-600 text-sm font-semibold tracking-wide">
                  <Link
                    href="https://github.com/features/actions"
                    target="_blank"
                    className="text-gray-400 hover:text-sky-700 transition"
                  >
                    Actions
                  </Link>{" "}
                  &#8212; Software Engineer III
                </span>
                <span className="text-gray-600 text-sm font-semibold tracking-wide">
                  <Link
                    href="https://docs.github.com/en/billing"
                    target="_blank"
                    className="text-gray-400 hover:text-emerald-700 transition"
                  >
                    Billing
                  </Link>{" "}
                  &#8212; Software Engineer III
                </span>
              </>
            )}
          />
          <ListItem
            date="2019-2020"
            logo="/Microsoft.png"
            alt="Microsoft logo"
            jobTitle={() => (
              <span className="text-gray-600 text-sm font-semibold tracking-wide">
                <Link
                  href="https://appcenter.ms"
                  target="_blank"
                  className="text-gray-400 hover:text-pink-700 transition"
                >
                  App Center
                </Link>{" "}
                &#8212; Software Engineer II
              </span>
            )}
          />
          <ListItem
            date="2018-2019"
            logo="/Allstate.png"
            alt="Allstate logo"
            jobTitle={() => (
              <span className="text-gray-600 text-sm font-semibold tracking-wide">
                <Link
                  href="https://www.allstate.com/landingpages/virtual-assist.htm"
                  target="_blank"
                  className="text-gray-400 hover:text-indigo-700 transition"
                >
                  Allstate
                </Link>{" "}
                &#8212; Software Engineer
              </span>
            )}
          />
        </List>
      </div>
      <div className="flex flex-col items-start w-full pb-48">
        <div className="pt-36">
          <h5 className="font-light text-md text-gray-800 mb-2">
            Aside from working, things I enjoy include...
          </h5>
          <ul>
            <li className="font-light text-sm text-gray-600 mb-1">
              💰 Working on a side-project called Banktree (personal-finance
              app).
            </li>
            <li className="font-light text-sm text-gray-600 mb-1">
              ⚽ Playing in a soccer league every Saturday; I play left-wing!
            </li>
            <li className="font-light text-sm text-gray-600 mb-1">
              🎵 Attend concerts for indie bands in Korea; My favorite band I've
              seen so far is 카라라!
            </li>
            <li className="font-light text-sm text-gray-600">
              ☕ Spending good-weather days wondering random neighborhoods of
              Seoul.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center w-full pb-2">
        <span className="text-sm font-light text-gray-600 text-center">
          Made with ❤️ by Keevan. <br />
          Check out the code for this side on{" "}
          <Link
            href="https://github.com/DanceParty/personal-website"
            className="text-gray-400 hover:text-gray-800 transition"
          >
            GitHub
          </Link>
          .
        </span>
      </div>
    </main>
  );
}

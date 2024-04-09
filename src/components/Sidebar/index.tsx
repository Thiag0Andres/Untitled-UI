import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { Logo } from "./Logo";
import * as Input from "../Input/index";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" link="" icon={Home} />
        <NavItem title="Dashboard" link="" icon={BarChart} />
        <NavItem title="Projects" link="" icon={SquareStack} />
        <NavItem title="Tasks" link="" icon={CheckSquare} />
        <NavItem title="Reporting" link="" icon={Flag} />
        <NavItem title="Users" link="" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" link="" icon={LifeBuoy} />
          <NavItem title="Sttings" link="" icon={Cog} />
        </nav>
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  );
}

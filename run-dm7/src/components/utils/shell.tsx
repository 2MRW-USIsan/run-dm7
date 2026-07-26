import * as Comps from "@/types/components";
import { Stack, AppBar, Toolbar } from "@mui/material";

/**
 * Shell
 * */
interface ShellProps {
  Sheet?: boolean;
  Field?: boolean;
  children: React.ReactNode;
}
export function Shell({ children }: ShellProps) {
  return <Stack>{children}</Stack>;
}
interface FieldShellProps {
  Row?: boolean;
  Column?: boolean;
  Flex?: number | "CONTAIER";
  children: React.ReactNode;
}
export function FieldShell({ children }: FieldShellProps) {
  return <Stack>{children}</Stack>;
}
interface CardShellProps {
  props?: Comps.CardShellComps;
  children: React.ReactNode;
}
export function CardShell({ children }: CardShellProps) {
  return <Stack>{children}</Stack>;
}

interface PageShellProps {
  children: React.ReactNode;
}
export function PageShell({ children }: PageShellProps) {
  return (
    <Stack>
      <Toolbar />
      {children}
    </Stack>
  );
}

interface AppbarShellProps {
  children: React.ReactNode;
}
export function AppbarShell({ children }: AppbarShellProps) {
  return (
    <AppBar>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

interface ToolbarShellProps {
  children: React.ReactNode;
}
export function ToolbarShell({ children }: ToolbarShellProps) {
  return (
    <Stack>
      <Toolbar>{children}</Toolbar>
    </Stack>
  );
}
interface GridShellProps {
  Size?: number | "CONTAIER";
  children: React.ReactNode;
}
export function GridShell({ children }: GridShellProps) {
  return <Stack>{children}</Stack>;
}

interface ModalShellProps {
  props: Comps.ModalShellComps;
  children: React.ReactNode;
}
export function ModalShell({ children }: ModalShellProps) {
  return <Stack>{children}</Stack>;
}

interface TableShellProps {
  children: React.ReactNode;
}
export function TableShell({ children }: TableShellProps) {
  return <Stack>{children}</Stack>;
}
interface TableHeadShellProps {
  children: React.ReactNode;
}
export function TableHeadShell({ children }: TableHeadShellProps) {
  return <Stack>{children}</Stack>;
}
interface TableBodyShellProps {
  children: React.ReactNode;
}
export function TableBodyShell({ children }: TableBodyShellProps) {
  return <Stack>{children}</Stack>;
}
interface TableRecordShellProps {
  children: React.ReactNode;
}
export function TableRecordShell({ children }: TableRecordShellProps) {
  return <Stack>{children}</Stack>;
}
interface TableCellShellProps {
  children: React.ReactNode;
}
export function TableCellShell({ children }: TableCellShellProps) {
  return <Stack>{children}</Stack>;
}

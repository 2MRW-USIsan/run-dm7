import * as Comps from "@/types/top/components";
import {
  Stack,
  AppBar,
  Toolbar,
  Modal,
  Grid,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

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
export function GridShell({ Size, children }: GridShellProps) {
  const isContainer = isNaN(Number(Size)) ? true : false;
  const gridSize = isFinite(Number(Size)) ? Number(Size) : undefined;
  return (
    <Grid container={isContainer} size={gridSize}>
      {children}
    </Grid>
  );
}

interface ModalShellProps {
  props: Comps.ModalShellComps;
  children: React.ReactNode;
}
export function ModalShell({ props: { open, onClose }, children }: ModalShellProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack>{children}</Stack>
    </Modal>
  );
}

interface TableShellProps {
  children: React.ReactNode;
}
export function TableShell({ children }: TableShellProps) {
  return (
    <TableContainer>
      <Table>{children}</Table>
    </TableContainer>
  );
}
interface TableHeadShellProps {
  children: React.ReactNode;
}
export function TableHeadShell({ children }: TableHeadShellProps) {
  return <TableHead>{children}</TableHead>;
}
interface TableBodyShellProps {
  children: React.ReactNode;
}
export function TableBodyShell({ children }: TableBodyShellProps) {
  return <TableBody>{children}</TableBody>;
}
interface TableRecordShellProps {
  children: React.ReactNode;
}
export function TableRecordShell({ children }: TableRecordShellProps) {
  return <TableRow>{children}</TableRow>;
}
interface TableCellShellProps {
  children: React.ReactNode;
}
export function TableCellShell({ children }: TableCellShellProps) {
  return <TableCell>{children}</TableCell>;
}

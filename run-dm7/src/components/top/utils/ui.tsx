"use client";

import * as Comps from "@/types/top/components";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Box, Button, Chip, Fab, Tab, TablePagination, Tabs, TextField, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

interface LabelItemProps {
  props: Comps.LabelItemComps;
}
export function LabelItem({ props: { item } }: LabelItemProps) {
  return <Typography variant={"body1"}>{item}</Typography>;
}
interface ChipsItemProps {
  props: Comps.ChipsItemComps;
}
export function ChipsItem({ props: { item } }: ChipsItemProps) {
  return <Chip label={item} variant={"outlined"} size={"small"} />;
}
interface ColorsItemProps {
  props: Comps.ColorsItemComps;
}
export function ColorsItem({ props: {} }: ColorsItemProps) {
  return <Box></Box>;
}
interface ImageItemProps {
  props: Comps.ImageItemComps;
}
export function ImageItem({ props: {} }: ImageItemProps) {
  return <Box></Box>;
}

/**
 * Toggle
 * */
interface CheckItemProps {
  props: Comps.CheckItemComps;
}
export function CheckItem({ props: { label, check, onClick } }: CheckItemProps) {
  return (
    <Chip
      label={label}
      onClick={onClick}
      variant={check ? "filled" : "outlined"}
      icon={check ? <TaskAltOutlinedIcon fontSize={"small"} /> : <CircleOutlinedIcon fontSize={"small"} />}
      size={"small"}
    />
  );
}
interface RadioItemProps {
  props: Comps.RadioItemComps;
}
export function RadioItem({ props: { label, check, onClick } }: RadioItemProps) {
  return (
    <Chip
      label={label}
      onClick={onClick}
      variant={check ? "filled" : "outlined"}
      icon={check ? <RadioButtonCheckedIcon fontSize={"small"} /> : <RadioButtonUncheckedIcon fontSize={"small"} />}
      size={"small"}
    />
  );
}
interface TabSelectItemProps {
  props: Comps.TabSelectItemComps;
}
export function TabSelectItem({ props: { value, list, onChange } }: TabSelectItemProps) {
  return (
    <Tabs centered variant={"fullWidth"} value={value ?? 0} onChange={onChange}>
      {isFinite(Number(value)) && list.length > 0 ? (
        list.map((label, index) => <Tab key={index} label={label} />)
      ) : (
        <Tab label={"--"} />
      )}
    </Tabs>
  );
}
interface TablePagingItemProps {
  props: Comps.TablePagingItemComps;
}
export function TablePagingItem({ props: { totalLength, currentPage, rowsPerPage, onChange } }: TablePagingItemProps) {
  return (
    <TablePagination
      component="div"
      count={totalLength}
      page={currentPage}
      onPageChange={onChange}
      rowsPerPage={rowsPerPage}
    />
  );
}

/**
 * Button
 * */
interface FabItemProps {
  props: Comps.FabItemComps;
}
export function FabItem({ props: { label, onClick = () => {} } }: FabItemProps) {
  return (
    <Fab color={"primary"} size={"small"} onClick={onClick} aria-label={label}>
      {label}
    </Fab>
  );
}
interface ButtonItemProps {
  Link?: boolean;
  Upload?: boolean;
  props: Comps.ButtonItemComps;
}
export function ButtonItem({
  Link,
  Upload,
  props: { onClick = () => {}, onUpload = () => {}, label = "", href = "", disabled = false },
}: ButtonItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickButton = () => {
    if (Upload) inputRef.current?.click();
    else onClick();
  };
  return (
    <Button
      variant={"contained"}
      color={"primary"}
      size={"small"}
      disabled={disabled}
      onClick={handleClickButton}
      href={Link ? href : undefined}
    >
      {label}
      {Upload && <input ref={inputRef} type="file" accept="application/json,.json" onChange={onUpload} hidden />}
    </Button>
  );
}
interface InputItemProps {
  props: Comps.InputItemComps;
}
export function InputItem({ props: { value, rows, onChange, disabled, readOnly } }: InputItemProps) {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const current = value ?? "";

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = current;
  }, [current]);

  const handleBlur = () => {
    if (!inputRef.current) return;
    onChange?.(inputRef.current.value);
  };
  return (
    <TextField
      inputRef={inputRef}
      onBlur={handleBlur}
      defaultValue={current}
      size={"small"}
      variant={"outlined"}
      fullWidth
      rows={rows}
      multiline={rows > 0}
      disabled={disabled}
      slotProps={{ htmlInput: { readOnly } }}
    />
  );
}

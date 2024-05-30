"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCountry, deleteCountry, getCountries } from "@/helpers/resources";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export const CountriesBroken = () => {
  const [value, setValue] = useState("");

  const queryClient = useQueryClient();

  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      return getCountries();
    },
  });

  const deleteCountryMutation = useMutation({
    mutationFn: deleteCountry,
    onSuccess: async (_, name) => {
      queryClient.setQueryData(
        ["countries"],
        countries?.filter((country) => country.name !== name),
      );
    },
  });

  const onDelete = (name: string) => {
    deleteCountryMutation.mutate(name);
  };

  const addCountryMutation = useMutation({
    mutationFn: addCountry,
    onSuccess: async (response) => {
      queryClient.setQueryData(["countries"], [...(countries || []), response]);
    },
  });

  const onAddCountry = () => {
    addCountryMutation.mutate(value);
    setValue("");
  };

  return (
    <div>
      <h3 className="text-3xl my-4">Compiler example: memoization is broken</h3>
      <p className="text-lg my-4">
        <ul>
          <li>Type in input fields - all rows and cells with re-render</li>
          <li>Click Add button - all rows and cells with re-render</li>
          <li>Click Delete button - all rows and cells with re-render</li>
        </ul>
      </p>
      <Table>
        <TableCaption>Supported countries list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries?.map(({ name }, index) => (
            <TableRow key={`${name.toLowerCase()}`}>
              <TableCell className="font-medium">
                <Link href={`/countriy/${name.toLowerCase()}`}>{name}</Link>
              </TableCell>
              <TableCell className="text-right">
                <Button onClick={() => onDelete(name)} variant="outline">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="my-4 flex items-center">
        <Input
          type="text"
          placeholder="Add new country"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={onAddCountry}>Add</button>
      </div>
    </div>
  );
};

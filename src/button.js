import React, { Component } from "react";

export function Button({ children, className, onClick }) {
    return <button className={className} onClick={onClick}>{children}</button>;
}
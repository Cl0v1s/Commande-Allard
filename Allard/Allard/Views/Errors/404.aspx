<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="404.aspx.cs" Inherits="Allard.Views.Errors._404" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div>
        <h1><%= this.Dialect.Error %> 404</h1>
        <div>
            <p>
                <%= this.Dialect.Error404 %>
            </p>
        </div>
    </div>
</asp:Content>

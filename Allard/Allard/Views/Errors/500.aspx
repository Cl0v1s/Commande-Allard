<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="500.aspx.cs" Inherits="Allard.Views.Errors._500" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
        <div>
        <h1><%= this.Dialect.Error %> 500</h1>
        <div>
            <p>
                <%= this.Dialect.Error500 %>
            </p>
        </div>
        <div id="Description" runat="server">

        </div>
    </div>
</asp:Content>

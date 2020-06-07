package com.javamaster.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.faces.validator.LengthValidator;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HomeServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String path = request.getServletPath();
		if (path.equals("/")) {
			request.getRequestDispatcher("/WEB-INF/view/index.jsp").forward(request, response);
		} else if (path.equals("/createAccount")) {
			request.getRequestDispatcher("/WEB-INF/view/createAccount.jsp").forward(request, response);
		} else if (path.equals("/welcome")) {
			ArrayList<Notebook> products = PropertiesDB.select();
			// String data = products.get(1).getName();
			request.setAttribute("products", products);
			request.getRequestDispatcher("/WEB-INF/view/welcome.jsp").forward(request, response);
		} else if (path.equals("/create")) {
			getServletContext().getRequestDispatcher("/WEB-INF/view/create.jsp").forward(request, response);

		} else if (path.equals("/edit")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				Notebook product = PropertiesDB.selectOne(id);
				if (product != null) {
					request.setAttribute("product", product);
					getServletContext().getRequestDispatcher("/WEB-INF/view/edit.jsp").forward(request, response);
				} else {
					getServletContext().getRequestDispatcher("/WEB-INF/view/notfound.jsp").forward(request, response);
				}
			} catch (Exception ex) {
				getServletContext().getRequestDispatcher("/WEB-INF/view/notfound.jsp").forward(request, response);
			}
		} else {
			getServletContext().getRequestDispatcher("/WEB-INF/view/notfound.jsp").forward(request, response);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String path = request.getServletPath();
		if (path.equals("/create")) {
			try {
				String surname = request.getParameter("surname");
				String name = request.getParameter("name");
				int age = Integer.parseInt(request.getParameter("age"));
				String sex = request.getParameter("sex");
				String phone = request.getParameter("phone");

				Notebook product = new Notebook(surname, name, age, sex, phone);
				PropertiesDB.insert(product);
				response.sendRedirect(request.getContextPath() + "/welcome");
			} catch (Exception ex) {

				getServletContext().getRequestDispatcher("/WEB-INF/view/create.jsp").forward(request, response);
			}
		}
		if (path.equals("/edit")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String surname = request.getParameter("surname");
				String name = request.getParameter("name");
				int age = Integer.parseInt(request.getParameter("age"));
				String sex = request.getParameter("sex");
				String phone = request.getParameter("phone");

				Notebook product = new Notebook(id, surname, name, age, sex, phone);
				PropertiesDB.update(product);
				response.sendRedirect(request.getContextPath() + "/welcome");
			} catch (Exception ex) {

				getServletContext().getRequestDispatcher("/WEB-INF/view/notfound.jsp").forward(request, response);
			}

		}
		if (path.equals("/delete")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				PropertiesDB.delete(id);
				response.sendRedirect(request.getContextPath() + "/welcome");
			} catch (Exception ex) {
				getServletContext().getRequestDispatcher("/WEB-INF/view/notfound.jsp").forward(request, response);
			}
		}

		if (path.equals("/")) {
			try {
				ArrayList<Account> products = PropertiesDB.selectAccount();
				Account product_by_id = null;
				boolean key = false;// ключ , позволяющий узнать, правильный был введен ли пароль и mail
				String mail = request.getParameter("mail");
				String password = request.getParameter("password");
				// Проверка на совпадение mail и password
				for (Account product : products) {
					if (product.getMail().equals(mail) && product.getPassword().equals(password)) {
						key = true;
						product_by_id = product;
					}
				}
				if (key) {
					request.setAttribute("product", product_by_id);
					response.sendRedirect(request.getContextPath() + "/welcome");

				} else {
					getServletContext().getRequestDispatcher("/WEB-INF/view/index.jsp").forward(request, response);
				}

			} catch (Exception ex) {

				getServletContext().getRequestDispatcher("/WEB-INF/view/index.jsp").forward(request, response);
			}

		}

		if (path.equals("/createAccount")) {
			int count = 0;
			try {

				String mail = request.getParameter("mail");
				String password = request.getParameter("password");
				ArrayList<Account> products = PropertiesDB.selectAccount();
				// Проверка на уже существующий мейл + пустые строки
				for (Account product : products) {
					count ++;
						if (product.getMail().equals(mail)) {
							response.sendRedirect(request.getContextPath() + "/createAccount");
								break;							
						}else if (count == products.size()) {
							if (mail.length() == 0 || password.length() == 0) {

								response.sendRedirect(request.getContextPath() + "/createAccount");
							} else {
								Account prod= new Account(mail, password);

								PropertiesDB.insert(prod);
								response.sendRedirect(request.getContextPath() + "/");
							}
							
						}
						
				}
				
			} catch (Exception ex) {

				getServletContext().getRequestDispatcher("/WEB-INF/view/createAccount.jsp").forward(request, response);
			}
		}

	}
}